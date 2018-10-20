import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub285Component} from "./stub285.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub285Component
        }])
    ],
    declarations: [
        Stub285Component
    ]
})
export class Stub285Module {

}
