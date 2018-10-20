import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub441Component} from "./stub441.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub441Component
        }])
    ],
    declarations: [
        Stub441Component
    ]
})
export class Stub441Module {

}
