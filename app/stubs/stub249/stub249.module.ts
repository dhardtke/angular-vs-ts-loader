import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub249Component} from "./stub249.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub249Component
        }])
    ],
    declarations: [
        Stub249Component
    ]
})
export class Stub249Module {

}
