import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub427Component} from "./stub427.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub427Component
        }])
    ],
    declarations: [
        Stub427Component
    ]
})
export class Stub427Module {

}
