import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub311Component} from "./stub311.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub311Component
        }])
    ],
    declarations: [
        Stub311Component
    ]
})
export class Stub311Module {

}
