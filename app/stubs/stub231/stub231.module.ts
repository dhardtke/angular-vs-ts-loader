import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub231Component} from "./stub231.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub231Component
        }])
    ],
    declarations: [
        Stub231Component
    ]
})
export class Stub231Module {

}
